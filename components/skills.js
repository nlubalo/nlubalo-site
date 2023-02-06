import { Badge, blue, blueDark, Grid } from "@nextui-org/react";
import Section from './section.js'
import skillsJSON from '../public/skills.json'

let skills = JSON.parse(JSON.stringify(skillsJSON))

export default function Skills () {
return (
    <Section name=''>
    <Grid.Container gap={2}>
      <Grid>
        <Badge color="gradient">Airflow</Badge>
      </Grid>
      <Grid>
        <Badge color="primary">Kafka</Badge>
      </Grid>
      <Grid>
        <Badge color="secondary">Fast API</Badge>
      </Grid>
      <Grid>
        <Badge color="success">AWS solutions architect</Badge>
      </Grid>
      <Grid>
        <Badge color="warning">AWS big data</Badge>
      </Grid>
      <Grid>
        <Badge color="error">Hadoop</Badge>
      </Grid>
      <Grid>
        <Badge color="error">Spark</Badge>
      </Grid>
    </Grid.Container>
    </Section>
  );
}