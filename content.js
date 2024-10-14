(function() {
    let intervalCode;
    let i = 0;

    function blockAdModal() {
        console.log('modal be gone!');
        const element = document.querySelector('.fc-dialog button.fc-close');
        if (element) {
            element.click()
            clearInterval(intervalCode);
            return true;
        }
        return false;
    }

    blockAdModal();
    intervalCode = setInterval(() => {
        if (i > 20) {
            clearInterval(intervalCode);
        }
        i++;

        blockAdModal();
    }, 250);
})()
