import Header from './components/header'
import Nav from './components/nav'
import Card from './components/card'
import Footer from './components/footer'
import Button from './components/button'



function App() {
  return (
    <main>
      <Nav/>
      <div>
        <Header title="Galería de imágenes con React"/>
      </div>
      <hr className='mx-5' />
      <div className='d-flex container'>
        <div className='row g-3'>
        <Card title='Rinoceronte' img="/img/rino.avif" desc='mamíferos placentarios del suborden ceratomorfos perteneciente al orden de los perisodáctilos.'/>
        <Card title='Ciervo' img="/img/ciervo.avif" desc='Se han documentado unas veintisiete subespecies distintas, que se diferencian entre sí por el tamaño.'/>
        <Card title='Jirafas' img="/img/jirafas.avif" desc='Es la más alta de todas las especies de animales terrestres existentes, alcanza una altura de 5,8m.'/>
        <Card title='Elefante' img="/img/elefante.avif" desc='Existen hoy en día tres especies y diversas subespecies. Entre estos destacan los mamuts.'/>
        <Card title='León' img="/img/leon.avif" desc='Es una mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera.'/>
        <Card title='Zebra' img="/img/zebra.avif" desc='Viven en grupos de entre cinco a diez individuos, se han visto grupos de hasta cincuenta ejemplares.'/>
        </div>
      </div>
      <div>
        <Button/>
      </div>
      <div className='mt-5'>
        <Footer/>
      </div>
    </main>
  );
  }
  
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

  const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder.append(wrapper)
  }
  
  const alertTrigger = document.getElementById('liveAlertBtn')
  if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
      alert('El chita es el animal más rápido del mundo en tierra, . Un chita adulto puede alcanzar una velocidad de entre 112 y 120 km/h. Los chitas solo pueden ronronear y no pueden rugir como leones y tigres. Matan a sus presas mordiéndoles el cuello para asfixiarlas.', 'success')
    })
  };

export default App
