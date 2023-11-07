// Model / entity
export default class Person {
  constructor({ id, vehicles, kmTravel, from, to }) {
    this.id = id;
    this.vehicles = vehicles;
    this.kmTravel = kmTravel;
    this.from = from;
    this.to = to;
  }

  formatted(language) {
    // convert the string "2009-01-01" into date
    const mapDate = (date) => {
      const [year, month, day] = date.split("-").map(Number);

      //js date month start on 0
      return new Date(year, month - 1, day);
    };

    return {
      id: Number(this.id),
      vehicles: new Intl.ListFormat(language, {
        style: "long",
        type: "conjunction", // conjunction - "and" instead of "," on the last array element
      }).format(this.vehicles),
      kmTravel: new Intl.NumberFormat(language, {
        style: "unit",
        unit: "kilometer",
      }).format(this.kmTravel),
      from: new Intl.DateTimeFormat(language, {
        month: "long",
        day: "2-digit",
        year: "numeric",
      }).format(mapDate(this.from)),
      to: new Intl.DateTimeFormat(language, {
        month: "long",
        day: "2-digit",
        year: "numeric",
      }).format(mapDate(this.to)),
    };
  }
}
