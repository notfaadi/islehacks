const storagePrefix = 'islehacks-forum-vote:';

type VoteState = 'up' | 'down' | '';

export function initForumVotes(): void {
  document.querySelectorAll<HTMLElement>('[data-forum-card], [data-forum-vote]').forEach((post) => {
    const slug = post.dataset.postSlug ?? post.dataset.forumCardSlug;
    const count = post.querySelector<HTMLElement>('[data-vote-count]');
    const upvote = post.querySelector<HTMLButtonElement>('[data-vote-up]');
    const downvote = post.querySelector<HTMLButtonElement>('[data-vote-down]');
    if (!slug || !count || !upvote) return;

    let vote: VoteState = '';
    try {
      const stored = window.localStorage.getItem(`${storagePrefix}${slug}`);
      vote = stored === 'up' || stored === 'down' ? stored : '';
    } catch {
      // The control still works for the current page when browser storage is unavailable.
    }

    const baseCount = Number(post.dataset.upvotes ?? count.textContent ?? 0) || 0;
    const offset = () => (vote === 'up' ? 1 : vote === 'down' ? -1 : 0);
    const render = () => {
      count.textContent = String(baseCount + offset());
      upvote.classList.toggle('is-upvoted', vote === 'up');
      upvote.setAttribute('aria-pressed', String(vote === 'up'));
      upvote.setAttribute('aria-label', vote === 'up' ? 'Remove your upvote' : 'Upvote this discussion');
      if (downvote) {
        downvote.disabled = false;
        downvote.classList.toggle('is-downvoted', vote === 'down');
        downvote.setAttribute('aria-pressed', String(vote === 'down'));
        downvote.setAttribute('aria-label', vote === 'down' ? 'Remove your downvote' : 'Downvote this discussion');
      }
    };

    const setVote = (next: VoteState) => {
      vote = vote === next ? '' : next;
      try {
        if (vote) window.localStorage.setItem(`${storagePrefix}${slug}`, vote);
        else window.localStorage.removeItem(`${storagePrefix}${slug}`);
      } catch {
        // Keep the updated count for this page view when browser storage is unavailable.
      }
      render();
    };

    upvote.addEventListener('click', () => setVote('up'));
    downvote?.addEventListener('click', () => setVote('down'));
    render();
  });
}
