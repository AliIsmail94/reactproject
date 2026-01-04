import Ram from "../assets/ram.jpg";
import Gpu from "../assets/gpu.jpg";
import Cpu from "../assets/cpu.webp";
import Ssd from "../assets/ssd.jpg";
import Psu from "../assets/psu.jpg";
import Mon from "../assets/mon.jpg";
import Key from "../assets/key.jpg";
import Cpu2 from "../assets/cpu2.jpg";

const products = [
  {
    id: 1,
    name: "RTX 4070 Ti Gaming OC",
    price: 799,
    category: "GPU",
    img: Gpu,
  },
  {
    id: 2,
    name: "Ryzen 7 7800X3D",
    price: 429,
    category: "CPU",
    img: Cpu,
  },
  {
    id: 3,
    name: "32GB DDR5 6000MHz RGB",
    price: 169,
    category: "Storage",
    img: Ram,
  },
  {
    id: 4,
    name: "1TB NVMe Gen4 SSD",
    price: 129,
    category: "Storage",
    img: Ssd,
  },
  {
    id: 5,
    name: "750W 80+ Gold PSU",
    price: 119,
    category: "PSU",
    img: Psu,
  },
  {
    id: 6,
    name: '27" 165Hz QHD Gaming Monitor',
    price: 349,
    category: "Monitor",
    img: Mon,
  },
  {
    id: 7,
    name: "Intel Core i7-13700KF",
    price: 379,
    category: "CPU",
    img: Cpu2,
  },

  {
    id: 8,
    name: "MechaType TKL Mechanical Keyboard",
    price: 129,
    category: "Peripherals",
    img: Key,
  },
];

export default products;
