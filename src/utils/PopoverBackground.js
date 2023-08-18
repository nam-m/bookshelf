const popoverBackground = (showPreview) => {
  if (showPreview) {
    document.body.style.overflow = 'hidden';
    /* Shift body to account for scroll bar disappearing 
    TO DO: make this value responsive*/
    document.body.style.marginRight = '22px';
  }
  else {
    document.body.style.overflow = 'revert';
    document.body.style.marginRight = 'revert';
  }
}

export default popoverBackground;