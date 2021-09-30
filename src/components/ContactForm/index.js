import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

import Input from "./Input/Input";
import Select from "./Select/Select";
import Textarea from "./Textarea/Textarea";
import Button from "../Button/Button";
import SendingSuccess from "../SendingSuccess/SendingSuccess";

import css from "./ContactForm.module.scss";

// import { postContactForm } from "@/actions/contactForm.js";

const ContactForm = (width) => {
  // const dispatch = useDispatch();

  const [valid, setValid] = useState({
    name: false,
    contactInfo: false,
    message: false,
  });
  const [allValid, setAllValid] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    contactInfo: "",
    message: "",
  });

  //#region VALIDATION
  useEffect(() => {
    // all but '-' for double-names
    var forbidden = /[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]+/;

    formData.name.length > 1 && !forbidden.test(formData.name)
      ? setValid({ ...valid, name: true })
      : setValid({ ...valid, name: false });
  }, [formData.name]);

  useEffect(() => {
    // all but @ % . for emails
    var forbidden = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;

    formData.contactInfo.length > 5 && !forbidden.test(formData.contactInfo)
      ? setValid({ ...valid, contactInfo: true })
      : setValid({ ...valid, contactInfo: false });
  }, [formData.contactInfo]);

  useEffect(() => {
    // all but .,:)? for messages
    var forbidden = /[!@#$%^&*(_+\-=\[\]{};'"\\|<>\/]+/;

    formData.message.length > 5 && !forbidden.test(formData.message)
      ? setValid({ ...valid, message: true })
      : setValid({ ...valid, message: false });
  }, [formData.message]);

  useEffect(() => {
    valid.name == true && valid.contactInfo == true && valid.message == true ? setAllValid(true) : setAllValid(false);
  }, [valid]);
  //#endregion

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(postContactForm(formData));
    // setLoading(true);
  };
  function clear(e) {
    e.preventDefault();

    setValid({
      name: false,
      contactInfo: false,
      message: false,
    });
    setFormData({
      name: "",
      category: "",
      contactInfo: "",
      message: "",
    });
  }

  return (
    <div className={css.div}>
      <form onSubmit={(e) => e.preventDefault()} className={css.form}>
        <>
          <h3>Contact Form</h3>
          <Input
            label="name"
            required
            infoHover="min. 2 characters"
            valid={valid.name}
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
          />

          <Input
            label="Contact Information"
            required
            infoHover="min. 5 characters, only - & @ allowed"
            valid={valid.contactInfo}
            id="contactInfo"
            value={formData.contactInfo}
            onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
          />

          <div className={css.select}>
            <h5>Select category</h5>
            <Select
              text="architecture"
              valid={formData.category === "architecture"}
              onClick={(e) => setFormData({ ...formData, category: "architecture" })}
            />
            <Select
              text="webdesign"
              valid={formData.category === "webdesign"}
              onClick={(e) => setFormData({ ...formData, category: "webdesign" })}
            />
            <Select
              text="graphics"
              valid={formData.category === "graphics"}
              onClick={(e) => setFormData({ ...formData, category: "graphics" })}
            />
            <Select
              text="Other"
              valid={formData.category === "other"}
              onClick={(e) => setFormData({ ...formData, category: "other" })}
            />
          </div>

          <Textarea
            label="Message"
            required
            infoHover="min. 10 characters, no special characters"
            valid={valid.message}
            rows="5"
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
          />
        </>

        <div className={css.buttonsWrapper}>
          <Button
            text={allValid ? "Send!" : "Please fill out the form"}
            className={`${css.send} ${allValid && css.valid}`}
            onClick={(e) => handleSubmit(e)}
          />

          <Button text="Clear form" onClick={(e) => clear(e)} className={css.clear} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
