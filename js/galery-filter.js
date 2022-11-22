const refs = {
  filterButtons: document.querySelectorAll('.filter'),
  webSiteItems: document.querySelectorAll('.web-site-items'),
  appItems: document.querySelectorAll('.app-items'),
  designItems: document.querySelectorAll('.design-items'),
  marketingItems: document.querySelectorAll('.marketing-items'),
};

const enableFilter = (filterBtn, galeryElements) => {
  filterBtn.classList.remove('active');
  galeryElements.forEach((element) => {
    element.classList.add('visually-hidden');
  });

  filterBtn.style.background = 'var(--secondary-background-color)';
  filterBtn.style.color = 'var(--secondary-text-color)';
  filterBtn.style.boxShadow = 'none';
};

const disableFilter = (filterBtn, galeryElements) => {
  filterBtn.classList.add('active');
  galeryElements.forEach((element) => {
    element.classList.remove('visually-hidden');
  });

  filterBtn.style.background = '#63a472';
  filterBtn.style.color = 'var(--main-white-color)';
  filterBtn.style.boxShadow =
    ' 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12)';
};

const onClick = (e) => {
  console.log(e.currentTarget);

  if (e.currentTarget.classList.contains('web-sites')) {
    if (e.currentTarget.classList.contains('active')) {
      enableFilter(e.currentTarget, refs.webSiteItems);

      return;
    } else {
      disableFilter(e.currentTarget, refs.webSiteItems);
    }
  }

  if (e.currentTarget.classList.contains('apps')) {
    if (e.currentTarget.classList.contains('active')) {
      enableFilter(e.currentTarget, refs.appItems);
      return;
    } else {
      disableFilter(e.currentTarget, refs.appItems);
    }
  }

  if (e.currentTarget.classList.contains('design')) {
    if (e.currentTarget.classList.contains('active')) {
      enableFilter(e.currentTarget, refs.designItems);
      return;
    } else {
      disableFilter(e.currentTarget, refs.designItems);
    }
  }

  if (e.currentTarget.classList.contains('marketing')) {
    if (e.currentTarget.classList.contains('active')) {
      enableFilter(e.currentTarget, refs.marketingItems);
      return;
    } else {
      disableFilter(e.currentTarget, refs.marketingItems);
    }
  }
};

refs.filterButtons.forEach((el) => el.addEventListener('click', onClick));
