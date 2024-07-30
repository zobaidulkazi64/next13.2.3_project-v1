import * as Tabs from "@radix-ui/react-tabs";
import { Box, Text } from "@radix-ui/themes";
import React from "react";
import EducationCard from "./EducationDetail";
import  {educationDetails}  from "@/contexts/data/educationDetails";
import Certificate from "./Certificate";
import GithubStats from "./GithubStatus";

const AboutTab = () => {
  return (
    <Tabs.Root defaultValue="Educations">
      <Tabs.List className="flex justify-around border border-dotted p-3">
        <Tabs.Trigger value="Educations">Educations</Tabs.Trigger>
        <Tabs.Trigger value="Certificates">Certificates</Tabs.Trigger>
        <Tabs.Trigger value="GithubStats">GithubStats</Tabs.Trigger>
      </Tabs.List>

      <Box pt="5">
        <Tabs.Content value="Educations">
          <EducationCard educationDetails={educationDetails} />
        </Tabs.Content>

        <Tabs.Content value="Certificates">
          <Certificate />
        </Tabs.Content>

        <Tabs.Content value="GithubStats">
          <GithubStats />
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
};

export default AboutTab;
