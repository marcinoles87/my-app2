import React from 'react'

function Opinie() {

  let ratingStar = (rating) =>{

    let i = 0

    for(i;i<rating;i++){
      console.log(i)
    }
    
    
  }

  


const reviews = [
  {
    id: 1,
    name: "Anna K.",
    rating: 5,
    title: "Świetna jakość i szybka dostawa",
    content:
      "Produkty dokładnie takie jak w opisie, przyszły dobrze zapakowane i szybciej niż się spodziewałam. Na pewno wrócę po więcej.",
    date: "2026-06-20"
  },
  {
    id: 2,
    name: "Marcin P.",
    rating: 4,
    title: "Bardzo dobry sklep, drobne uwagi",
    content:
      "Jestem zadowolony z zakupu, jakość super. Jedyny minus to trochę dłuższy czas dostawy niż podany, ale obsługa klienta była pomocna.",
    date: "2026-06-18"
  },
  {
    id: 3,
    name: "Katarzyna L.",
    rating: 5,
    title: "Polecam w 100%",
    content:
      "Świetny kontakt, szybka realizacja zamówienia i miła niespodzianka w paczce. Czuć, że ktoś dba o szczegóły.",
    date: "2026-06-15"
  },
  {
    id: 4,
    name: "Piotr S.",
    rating: 4,
    title: "Dobry stosunek jakości do ceny",
    content:
      "Za tę cenę jakość jest naprawdę bardzo dobra. Chętnie kupię ponownie, jeśli pojawią się nowe produkty.",
    date: "2026-06-10"
  },
  {
    id: 5,
    name: "Magda R.",
    rating: 5,
    title: "Idealne na prezent",
    content:
      "Zamówione produkty były pięknie zapakowane, idealne na prezent. Osoba obdarowana zachwycona, ja też.",
    date: "2026-06-05"
  }
];
  return (
    <>
    <h1>Opinie</h1>
    <div className='opinie-container'>
        {reviews.map( (item,index) =>{
            return(
                <div className='opinia' key={index}>
                    <h3>{item.name}</h3>
                    <p>Ocena: {ratingStar(item.rating)}</p>
                    <p>{item.title}</p>
                    <p>{item.content}</p>

                </div>
            )
        })}

    </div>

    </>
  )
}

export default Opinie