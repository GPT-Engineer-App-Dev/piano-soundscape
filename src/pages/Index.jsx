import React from "react";
import { Box, Button, Container, VStack, Text } from "@chakra-ui/react";
import * as Tone from "tone";

const notes = [
  { note: "C4", label: "C" },
  { note: "D4", label: "D" },
  { note: "E4", label: "E" },
  { note: "F4", label: "F" },
  { note: "G4", label: "G" },
  { note: "A4", label: "A" },
  { note: "B4", label: "B" },
  { note: "C5", label: "C" },
];

const playNote = (note) => {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease(note, "8n");
};

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Virtual Piano</Text>
        <Text>Click on the keys to play notes.</Text>
        <Box display="flex" justifyContent="center" alignItems="center">
          {notes.map((key) => (
            <Button key={key.note} m={1} onClick={() => playNote(key.note)}>
              {key.label}
            </Button>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;