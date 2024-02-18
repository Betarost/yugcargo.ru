import { Cemjsx, front, Ref, Static, Fn } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.func.checkForm = function () {
    if (Static.form.fullName.valid && Static.form.email.valid) {
        Static.form.isValid = true
    } else {
        Static.form.isValid = false
    }
    Fn.init()
    return
}

front.func.clearFields = function () {
    Static.form = {
        fullName: {
            value: "",
            valid: false,
            error: false,
            placeholder: "ФИО",
            view: false,
            disable: false
        },
        email: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Email адрес",
            view: false,
            disable: false
        },
        phone: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Телефон",
            view: false,
            disable: false
        },
        telegram: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Telegram",
            view: false,
            disable: false
        },
        comment: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Комментарий",
            view: false,
            disable: false
        },
        isValid: false,
    }

    Ref.fullName.value = ""
    Ref.phone.value = ""
    Ref.email.value = ""
    Ref.telegram.value = ""
    Ref.modalComment.value = ""
    Fn.init()
    return
}

front.loader = () => {
    Static.limitComment = 400;
    //-----------------------
    Static.form = {
        fullName: {
            value: "",
            valid: false,
            error: false,
            placeholder: "ФИО",
            view: false,
            disable: false
        },
        email: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Email адрес",
            view: false,
            disable: false
        },
        phone: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Телефон",
            view: false,
            disable: false
        },
        telegram: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Telegram",
            view: false,
            disable: false
        },
        comment: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Комментарий",
            view: false,
            disable: false
        },
        isValid: false,
    }

    return
}

front.display = () => {
    return (
        <section class="application section" id="application" init={() => {
            setTimeout(() => {
                Fn.initOne("modalSale", {})
            }, 5000);
        }}>
            <div class="wrapper">
                <h2 class="title-secondary">Оставьте заявку на консультацию
                </h2>
                <p class="text-main text__fiolet">Контакты, для связи с вами:
                </p>
                <Navigation />
            </div>
        </section>
    )
}

export { front }