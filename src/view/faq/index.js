import './style.css'
import Imagem from '@/components/image'
import FaqIMG from '@/assets/faq.png'
import LoudDetails from './loudDetails'

export default function FAQ({ faq }) {
    return (
        <header id={'faq'} className='faq'>
            <Imagem src={FaqIMG} />
            {
                !faq ? <LoudDetails /> : <div className='divD'>{
                    faq.map((item, index) => {
                        return (
                            <details key={index} open>
                                <summary>{item.questions} ?</summary>
                                <p>{item.answers}</p>
                            </details>
                        )
                    })}</div>
            }

        </header>
    )
}