const $d = document;
const $ls = localStorage;


export default function setupTheme(btn) {
  const $btnSwitch = $d.querySelector(btn);

  $btnSwitch.addEventListener('click', ()=> {
    $d.body.classList.toggle('dark');
    $btnSwitch.classList.toggle('active');

    // Create theme in LocalStorage
  if ($d.body.classList.contains('dark'))
    $ls.setItem('dark-theme', 'true');
  else
    $ls.setItem('dark-theme', 'false')
  });  

  // Save theme and btn position
    if($ls.getItem('dark-theme') === 'true'){
      $d.body.classList.add('dark');
      $btnSwitch.classList.add('active');  
     }   
     else {
       $d.body.classList.remove('dark');
       $btnSwitch.classList.remove('active');
     }
  };

  

  
  
    

  


