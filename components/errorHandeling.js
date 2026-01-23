function showErrorMessage(message){
    return /*HTML*/`
        <section class="full-size center">
            <div>
                <p class="h5">${message}</p>
            </div>
        </section>
    `;
}

function showErrorMessageWithButton(topMessage, message, buttonLink, buttonText){
    return /*HTML*/`
        <section class="full-size center">
            <h1 class="h5">${topMessage}</h1>
            <p class="h5">${message}</p>
            <a href=${buttonLink} class="button">${buttonText}</a>
        </section>
    `;
}
