
function header(){
    document.getElementById('header').innerHTML = /*HTML*/`
    <section class="header">
        <div>
            <a href="../index.html">
                <picture>
                    <source media="(max-width: 800px)" srcset="/public/logo/Logo-secondary.svg">
                    <source media="(min-width: 801px)" srcset="/public/logo/Logo-main.svg">
                    <img src="./public/logo/Logo-main.svg" alt="TechLabs logo" loading="lazy">
                </picture>
            </a>
        </div>

        <nav id="navigation">
            <input class="" id="menu" type="checkbox" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="menu-list"/>
            <label for="menu" class="hidden-on-desktop" aria-label="Open menu">
                <span></span>
                <span></span>
                <span></span>
            </label>

                <ul class="menu">
                    <li>
                        <label for="menu" class="hidden-on-desktop" aria-label="Close menu">
                            <div class="close-menu-icon">
                                <img src="./public/icons/close.svg" alt="" loading="lazy"/>
                            </div>
                        </label>
                    </li>
                    <li>
                        <a href="../index.html">products</a>
                    </li>
                    <li>
                        <a href="../cart.html">cart
                        <div>
                            <img src="../public/icons/cart.svg" alt="" loading="lazy">
                        </div>
                        </a> 
                    </li>
                    <li>
                        <a class="button red" href="/account/login.html">log in</a>
                    </li>
                    
                </ul>

            </nav>
    </section>
    `;
}