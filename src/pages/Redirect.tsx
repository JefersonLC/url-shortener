import {useRoute} from 'wouter'

export default function About() {

  const  [, params]= useRoute('/redirect/:id')

  return (
    <div>{params?.id}</div>
  )
}
