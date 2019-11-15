const handleMouseMove = ({ clientX, clientY, target }) => console.log(clientX, clientY, target)

// document.documentElement.addEventListener('mousemove', handleMouseMove)

const frutas = ['banana', 'uva', 'maça']
const [ fruta1, fruta2 ] = frutas
console.log(fruta1, fruta2)

const useState = [
  "blue",
  function(color) {
    useState[0] = color
  }
]

const [color, setColor] = useState

setColor("red")