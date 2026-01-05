
function header(){
    document.getElementById('header').innerHTML = /*HTML*/`
    <section class="header">
        <div>
            <picture>
                <source media="(max-width: 750px)" srcset="public/logo/Logo-secondary.svg">
                <source media="(min-width: 751px)" srcset="public/logo/Logo-main.svg">
                <img src="public/logo/Logo-main.svg" alt="TechLabs logo" loading="lazy">
            </picture>
        </div>

            <ul class="menu">
                <li>
                    <a href="../index.html">products</a>
                </li>
                <li>
                    <a href="../cart.html">cart
                    <div>
                        <img src="public/icons/cart.svg" alt="" loading="lazy">
                    </div>
                    </a> 
                </li>
                <li>
                    <a class="button red" href="../account/login.html">log in</a>
                </li>
            </ul>
    </section>
    `;
}