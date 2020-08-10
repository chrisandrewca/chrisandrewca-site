export const matchLocation = (pages) => {

  const { hash, pathname } = window.location;

  for (const page of pages) {
    const { path: regex } = page;
    if (regex.exec(pathname)) {
      return { hash, page, pathname };
    }
  }
};

export const setLocation = (path) => {

  const state = {};
  const title = 'TODO TITLE'; // TODO not needed? ignored less safari? what does that look like?
  window.history.pushState(state, title, path);
  window.dispatchEvent(new CustomEvent('setLocation', { state, title, path }));
};

export const replaceLocation = (path) => {

  const state = {};
  const title = 'TODO TITLE';
  window.history.replaceState(state, title, path);
  window.dispatchEvent(new CustomEvent('setLocation', { state, title, path }));
};