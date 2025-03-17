import React from 'react'
import NavBar from './NavBar';

const Dante = () => {
    const navigateToCanto = () => {
        window.location.href = '/canto/inferno-1';
    }
  return (
    <div>
        <NavBar />
        <div className="dante">
            <h1>Overall Remarks </h1>
            <p>
            Hello, this page is to give some background on everything. This project covers four cantos in detail: Inferno I, Inferno III, Purgatorio I, and Paradiso I. Each of these cantos are picked to give a quick look into Dante’s journey. Inferno I starts off his journey as it opens with him forced to undertake his pilgrimage. However, it isn’t until Inferno III that he actually reaches hell and starts to experience beyond where humans go. Purgatorio I and Paradiso I both give readers an insight into what to expect regarding their respective areas of the afterlife. 
            </p>
            <br />
            <p>
            There is also some interesting imagery to note across the books present at the starts of each journey Dante takes. For example, in Inferno I, he begins in the dark where he has lost his way to God. There is a brief ray of light that grants him respite, but three beasts quickly push him back down to an area where the light is gone. In Purgatorio I, he starts his journey at dawn where he can see four stars representing good qualities. This is a stark contrast to Inferno I where he is faced with three beasts representing sins. Finally, in Paradiso, he rises through the sky where the sun shines so brightly it feels like there are two suns in the sky. In Inferno I, God’s grace is represented by light. When he finally reaches Paradiso, he is surrounded by light / God’s grace representing the last stage of his pilgrimage. This is discussed in further detail on each canto’s separate page, but it is interesting to see how the details weave together to create a greater narrative. 
            </p>
            <br />
            <p>
            Now to give a brief summary of some historical background important to The Divine Comedy, Dante, and why Dante wrote The Divine Comedy. 
            </p>        
            <br />
            <p>
            Dante was born in Florence in 1265. A major event of his childhood was his love for Beatrice whom we meet in Paradiso. It is speculated that Beatrice is Bice who married someone else and died young. However, Dante professed that he fell in love with her at first sight and despite being married many years later, he never forgot about her. After Beatrice died, he became very active as a philosopher and soon after as a politician. As a wider piece of history, he participated in two major divisions in Florentine. The first was the Guelphs (forces supporting the papacy) versus the Ghibellines (forces supporting the roman empire). In 1260, the Ghibellines defeated the Guelphs in the battle of Montaperti. However, in 1266, Frederick II's illegitimate son died in battle leading to the takeover of the Guelphs / the Second Republic. Dante is said to have played a part in many of the battles that led to the Guelphs’ victory.   
            </p>
            <br />
            <p>
            In the 1290s, there was no question that the Guelphs had won, but there were soon divisions within the party leading to the White Guelphs and the Black Guelphs. The White Guelphs, of which Dante was a part of, wanted the republic to be free of the papacy as well as its french allies whereas the Black Guelphs were willing to compromise with the papacy to retain more power over Florence. 
            </p>
            <br />
            <p>
            When Pope Boniface VIII took office in 1294, he wanted to extend the papacy’s reach by taking advantage of the internal discord within Florence. Dante, realizing this, opposed Boniface. The Black Guelph were able to take over in 1301 and levy punishments on those of the White Guelph party. In 1302, Dante was called to trial and after he didn’t show up, he was exiled and ordered to be killed if he returned. In exile, he wandered around Italy, and attempted to reenter Florence many times with other exiled White Guelphs and Ghibellines. However, after their attempts failed, he detached himself and decided to be his own party. 
            </p>
            <br />
            <p>
            After Boniface passed away in 1303 and the brief period when Benedict XI was pope, Pope Clement V became the new pope. He then announced Henry VII (who had been elected in 1308) as the new emperor of Italy. Dante as well as many other exiles hoped Henry VII would restore Florence to its former glory and lift their exile. However, soon after his placement as emperor, Pope Clement V seceded to pressure from France and turned on Henry VII. Henry VII died suddenly in 1313, ridding Dante and others of hope.
            </p>
            <br />
            <p>
            It was in exile that Dante wrote works like the Monarchia as well as the Divine Comedy which highlighted his political thoughts about what qualities a good ruler holds. The complete Paradiso was released only after his death. With all of this context, perhaps it becomes clear why Dante weaves politics into religion throughout the Divine Comedy and why he has such hatred towards corruption. 
            </p>
            <br />
            <button className="white-hollow-button" onClick={navigateToCanto}>Start Here</button>
            <h1>Sources</h1>
            <p>
            Mandelbaum, Allen. “Dante in His Age”. Lectura Dantis, Inferno, 31 Dec. 1998, pp. 1–8, https://doi.org/10.1525/9780520315808-002. Accessed 16 March 2025.
            </p>
            <p>
            “Inferno I.” Translated by Robert Hollander and Jean Hollander, Princeton University, The Trustees of Princeton University, dante.princeton.edu/. Accessed 16 Mar. 2025. 
            </p>
            <p>
            “Inferno III.” Translated by Robert Hollander and Jean Hollander, Princeton University, The Trustees of Princeton University, dante.princeton.edu/. Accessed 16 Mar. 2025. 
            </p>
            <p>
            “Purgatorio I.” Translated by Robert Hollander and Jean Hollander, Princeton University, The Trustees of Princeton University, dante.princeton.edu/. Accessed 16 Mar. 2025. 
            </p>
            <p>
            “Paradiso I.” Translated by Robert Hollander and Jean Hollander, Princeton University, The Trustees of Princeton University, dante.princeton.edu/. Accessed 16 Mar. 2025. 
            </p>
        </div>
    </div>
  )
}

export default Dante