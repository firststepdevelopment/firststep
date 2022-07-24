function chng_bg(selection) {
    const body = document.getElementById('main');
    const meny = document.getElementById('menu *');
    switch (selection) {
      case false:
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        menu.style.backgroundColor = 'black';
        menu.style.color = 'white';
        break;
      case true:
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        menu.style.backgroundColor = 'white';
        menu.style.color = 'black';
        break;
    }
  }