const container = document.querySelector(".container");

const carIdentificationFields = [
  {
    name: "registrationNumber",
    label: "Immatriculation",
    required: true,
  },
  {
    name: "VIN",
    label: "VIN",
    required: true,
  },
  {
    name: "model",
    label: "Modèle",
    required: true,
  },
  {
    name: "finition",
    label: "Finition",
    required: true,
  },
  {
    name: "typology",
    label: "Typologie",
    required: true,
  },
  {
    name: "carBody",
    label: "Carosserie",
    required: true,
  },
  {
    name: "color",
    label: "Couleur",
    required: true,
  },
  {
    name: "energy",
    label: "Energie",
    required: true,
  },
  {
    name: "carOptions",
    label: "Options ( GPS, vitre electrique... )",
    required: true,
  },
  {
    name: "critAirNorm",
    label: "Norme crit’air ( vignette A/B/C/D )",
    required: true,
  },
  {
    name: "CO2Norm",
    label: "Norme CO2",
    required: true,
  },
  {
    name: "driveWheels",
    label: "Roue motrices",
    required: true,
  },
  {
    name: "seats",
    label: "Nombre de places",
    required: true,
  },
  {
    name: "MECDate",
    label: "Date MEC",
    required: true,
  },
  {
    name: "euroNorm",
    label: "Norme Euro",
    required: true,
  },
  {
    name: "km",
    label: "Kilométrage",
    required: true,
  },
  {
    name: "years",
    label: "Année du véhicule",
    required: true,
  },
  {
    name: "doors",
    label: "Nombre de portes",
    required: false,
  },
  {
    name: "speed",
    label: "Nombre de vitesse",
    required: false,
  },
  {
    name: "width",
    label: "Largeur",
    required: false,
  },
  {
    name: "height",
    label: "Hauteur",
    required: false,
  },
  {
    name: "length",
    label: "Longueur",
    required: false,
  },
];

function toHTML() {
  container.innerHTML = carIdentificationFields
    .map(
      (obj) =>
        `<div class=“mb-4 rounded-lg text-sm”>
    <label for=“${obj.name}” class="required">
    ${obj.label}
</label>
    <input type="text" placeholder="${obj.label}" name="${obj.name}"
  id=“${obj.name}” required />
  </div>`
    )
    .join("");
}

toHTML();
