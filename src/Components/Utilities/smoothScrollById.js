const smoothScrollById = (id) => {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

export default smoothScrollById;
