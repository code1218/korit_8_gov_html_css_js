function studentRegister() {

    return `
        <div>
            ${studentRegisterInput({type: "text", name: "name", onkeyup: "handleRegisterOnkeyup"})}
            ${studentRegisterInput({type: "text", name: "age", onkeyup: "handleRegisterOnkeyup"})}
            ${studentRegisterInput({type: "text", name: "address", onkeyup: "handleRegisterOnkeyup"})}
        </div>
    `;
}