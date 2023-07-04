import axios from "axios";

const requestToHazardSpectrum = async (location, tr) => {
  try {
    const { data } = await axios(
      `/hazardspectrum?location=${location}&tr=${tr}`
    );
    const series = [];

    data.data.map((value) => {
      series.push([
        Math.log10(parseFloat(value.x)),
        Math.log10(parseFloat(value.y)),
      ]);
    });

    return series;
  } catch (error) {
    console.log(error);
  }
};

export default requestToHazardSpectrum;