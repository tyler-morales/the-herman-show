import React from 'react'
import Image from 'next/image'

let members = [
  {name: 'Michael McInerney', position: 'Associate Producer'},
  {name: 'Kevin Deiber', position: 'Associate Producer'},
  {name: 'Abby Ehrler', position: 'Production Director'},
  {name: 'Craig Dent', position: 'Photo Editor'},
  {name: 'Giuliano Catalano', position: 'Voiceover Contributor'},
  {name: 'Tyler Morales', position: 'Web Developer & Photographer'},
  {name: 'Matt Begeman', position: 'Photographer'},
]

export default function TheTeam() {
  return (
    <section className="max-w-7xl m-auto px-4 w-full">
      <h2 className="font-bold text-3xl mb-6">The Team</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {members.map((member, index) => {
          return (
            <li key={index} className="text-center">
              <Image
                src="https://i.picsum.photos/id/407/300/200.jpg?hmac=9EhoXMZ1QdwJue90vzxcjBg2YzsZsAWCjJ7oxOhtcU0"
                height={200}
                width={200}
                layout="responsive"
                alt={member.name}
                className="object-fit"
              />
              <h4 className="mt-4 font-bold block">{member.name}</h4>
              <span className="block">{member.position}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
