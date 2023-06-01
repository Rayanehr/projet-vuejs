<template> 
<header>
    
    <div class="menu">
        <h1>Mon ecole de formation</h1>
        <div class="menu-nav">
        <nav>
            <div class="">
            <ul>
                <li><a href="#"> Acceuil </a> </li>
                <li><a href="#"> Inscrire </a> </li>
                <li> <router-link to="formations">Offre de formations</router-link> </li>
                <li> <router-link to="enseignants">Enseignants</router-link> </li>
                <li><a href="#"> A propos </a> </li>
                <button class="user1" style="float: right ;background-color: #111111 ; color: #B0413E ; ">
                 
                        <div class="dropdown">
                            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              
                            </a>

                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item logout-link" href="#">Déconnexion</a>
                            </div>
                        </div>
                 
                        <a class="login-link" href="#">Connexion</a>
                    
                </button>

            </ul>
            </div>
        </nav>
        </div>

    </div>
  </header>
</template>

