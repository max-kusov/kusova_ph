document.addEventListener("DOMContentLoaded", () => {

    class ContactsCards {
        constructor(src, alt, text, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.text = text;
            this.parent = document.querySelector(parentSelector);
        }
        render() {
            const element = document.createElement("div");
            element.innerHTML = `
                <div class="contacts__page">
                    <img src=${this.src} alt=${this.alt}>
                    <div class="contacts__info">${this.text}</div>
                </div>
            `
            this.parent.append(element);
        }
    }

    new ContactsCards(
        'img/contacts/Jj3CL_GHHao.jpg',
        'Instagram',
        'Instagram',
        '.contacts'
    ).render();
    new ContactsCards(
        'img/contacts/uLCLuP_Nl4s.jpg',
        'VK',
        'vk',
        '.contacts'
    ).render();
    new ContactsCards(
        'img/contacts/oPzdffDfFbw.jpg',
        'Phone',
        'Phone',
        '.contacts'
    ).render();

});