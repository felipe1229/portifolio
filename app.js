class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if(this.form) {
            this.url = this.form.getAttribute("action")
        }
        this.sendForm.bind(this);
    }

    displaySuccess(){
        this.form.innerHTML = this.settings.success;
    }

    displayError(){
        this.form.innerHTML = this.settings.error;
    }

    getFormObject(){
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]")
        fields.forEach((field)=> {
            formObject[field.getAttribute("name")] = field.value;
        })
        return formObject;
    }

    onSubmission(event) {
        event.preventDefault();
        event.target.disable = true;
        event.target.innerText = "Enviando..."
    }

    async sendForm(event) {
        try{
            this.onSubmission(event);
        await fatch(this.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "aoolication/json",
            },
            body: JSON.stringify(this.getFormObject),
        });
        this.displaySuccess();

    } catch (error) {
        this.displayError();
        throw new Error(error);
    }
    }

    init() {
        if (this.form) this.formButton.addEventListener("click", this.sendForm);
        return this;
    }
}

const FormSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1>Mensagem enviada</h1>",
    error: "<h1>Não foi possivel enviar sua mensagem.</h1>",
});

