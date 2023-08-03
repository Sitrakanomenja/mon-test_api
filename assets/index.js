
    //  fetch("./assets/user.json")
    //  .then(res => res.json())
    //  .then(user => {
    //   console.log(user)
    //  })

    let userData = [];
    
    const fetchUser = async () => {
        await fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((user) => (userData = user ));
            // console.log(user);
    };
    // affichage des utilisateurs
    const userDisplay = async () => { 
      await fetchUser();  

      document.body.innerHTML = userData
        .map((user) =>
             `
             <div class="container">
                 <img src="./assets/images.jpeg" class="image" >
                <article>
                    <h2>${user.name} ${user.username}</h2>
                    <b> <i>${user.email}</i> </b><br>
                    <p id="id-list">${user.address.street} <br><br> ${user.address.suite} ${user.address.city} <br><br> ${user.address.zipcode} 
                    <br><br>geo: ${user.address.geo.lat} ${user.address.geo.lng} <br><br>
                     Phone: ${user.phone} <br><br>
                     Website: ${user.website} <br><br>
                    Company: ${user.company.name} ${user.company.catchPhrase}<br><br>${user.company.bs}
                    </p>

                    <button onclick="toggleText('id-list')">Click here</button>
                </article>
                
                <span id="font"><i class="fa fa-heart" aria-hidden="true" class="font"></i> </span>
                <span> <i class="fa fa-ellipsis-v fa-lg" aria-hidden="true" ></i></span>
               
             </div>

             `
         ).join('');
    }
    
    userDisplay (); 
  
    
// // click affiche ,cache

//  function toggleText(elementId) {
//          var textElement = document.getElementById(elementId);
//          textElement.classList.toggle("hidden");
//    }