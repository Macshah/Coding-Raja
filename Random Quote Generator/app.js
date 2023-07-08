
document.addEventListener('DOMContentLoaded',refersh)


function refersh(){
    {
        let r=document.getElementById('refesh')
        r.addEventListener('click',refersh)
        let x=document.getElementById("catch");
        let y=document.getElementById("catch2");
        let p=Math.floor(Math.random()*10)
        const a=['"To live is the rarest thing in the world. Most people exist, that is all."',
        '"That it will never come again is what makes life so sweet."','"It is never too late to be what you might have been."','"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."','"Pain is inevitable. Suffering is optional."','"Whatever the reason may be, murder is always wrong."','"My Mercy Prevails Over My Wrath"','"Give up on your dreams and die."','"Life is tough my darling, but so are you."',
        '"Don\'t\' let your happiness depend on something you may lose."','"We are all broken, that\'s\' how the light gets in."'
        ]
        const b=['- Oscar Wilde','- Emily Dickinson','- George Eliot','- Ralph Waldo Emerson','- Haruki Murakami','- L Lawliet','- Siddiq','- Levi Ackerman','- Stephanie Bennett Henry','- C.S. Lewis','- Ernest Hemingway ',
      
        ]
        x.innerHTML=a[p];
        y.innerHTML=b[p]
      
      }
}
