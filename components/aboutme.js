import React from 'react'
import Section from './section.js'
import { Card, Grid, Text, Avatar, Row } from "@nextui-org/react";



export default function AboutMe () {
  return (
    <Section name=''>
      <Grid sm={12} md={12}>
        <Card css={{ mw: "" }}>
          <Card.Body css={{ py: "$10" }}>
            <Text className='text-base'>
              “Web and mobile application developer with a focus on UI engineering, Fullstack development, UX design and Design systems.
              I have over Five(5) years experience in professional work environment working onsite and fully remote.”
            </Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-start">
             <Text className='text-base'>Nancy Lubalo</Text>
            </Row>
            <Row justify="flex-start">
             <Text className='text-base'>Data Engineer, Nairobi, Kenya</Text>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </Section>
  )
}