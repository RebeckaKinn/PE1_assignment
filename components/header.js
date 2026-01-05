
function header(){
    document.getElementById('header').innerHTML = /*HTML*/`
    <section>
        <div>
            <img src="public/logo/Logo-main.svg" alt="TechLabs logo" loading="lazy">
        </div>

        <nav>
            <ul>
                <li>
                    <a href="../index.html">products</a>
                </li>
                <li>
                    <a href="../cart.html">cart
                    <img src="public/icons/cart.svg" alt="" loading="lazy">
                    </a> 
                </li>
                <li>
                    <a href="../account/login.html">log in</a>
                </li>
            </ul>
        </nav>
    </section>
    `;
}