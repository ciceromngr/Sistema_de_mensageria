import Mail from "../libs/Mail"
export default {
    key: 'SendMailForUser',
    async handle({ data }) {
        await Mail.sendMail({
            from: `Cicero Romão <cicero@cicero.com>`,
            to: `${data.name} <${data.email}>`,
            subject: 'Cadastro na plataforma send',
            html: `Olá ${data.name}, seja bem vindo a plataforma send!`
        })
    }
}