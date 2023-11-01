$('document').ready(function() {
    $('#telephone').mask('(00) 00000-0000')
    $('form').validate({
        rules: {
            nameInput: {
                required: true
            },
            emailInput: {
                required: true,
                email: true
            },
            messageTextArea: {
                required: true
            }
        },
        messages: {
            nameInput: 'Por favor, digite o seu nome!',
            emailInput: 'Por favor, digite o seu email!',
            messageTextArea: 'Por favor, deixe-nos sua mensagem!'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(event, validator) {
            let incorrectInputs = validator.numberOfInvalids()

            if(incorrectInputs){
                alert(`Por favor, preencha os ${incorrectInputs} restantes!`)
            }
        }
    })
})