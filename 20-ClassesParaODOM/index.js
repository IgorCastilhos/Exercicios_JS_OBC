import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";
import { radioInput } from "./radioInput.js";

const title = new Component("h1", "body", { textContent: "Bem-Vindo(a)!" });
console.log(title);
title.render();

title.tag = "h3";

title.build().render();

const form = new Form("body");

const label = new Label("Nome:", form, { htmlFor: "nameInput" });
const input = new Input(form, { id: "nameInput", name: "name" });
const radio = new radioInput(form, { id: "radioInp", name: "radioInp" });

form.render();
label.render();

form.addChildren(input);
form.addChildren(radio);

form.addChildren(
  new Component("br"),
  new Component("br"),
  new Label("Data de nascimento: ", form, { htmlFor: "birthdayInput" }),
  new Input(form, { id: "birthdayInput", name: "birthday", type: "date" }),

  new Label("Experiência: 0-2 anos", form, { htmlFor: "radioInp1" }),
  new radioInput(form, { id: "radioInp1", name: "radioInp1", type: "radio" }),

  new Label("Experiência: 3-5 anos", form, { htmlFor: "radioInp2" }),
  new radioInput(form, { id: "radioInp2", name: "radioInp2", type: "radio" }),

  new Label("Experiência: 5+ anos", form, { htmlFor: "radioInp3" }),
  new radioInput(form, { id: "radioInp3", name: "radioInp3", type: "radio" })
);
