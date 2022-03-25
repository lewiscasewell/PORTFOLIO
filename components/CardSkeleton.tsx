import { Stack, Skeleton, HStack } from "@chakra-ui/react";
import React from "react";

const CardSkeleton: React.FC = () => {
  return (
    <Stack bg="navy.light" borderRadius="md" p={5} spacing="15px">
      <Skeleton
        height="13px"
        startColor="slate.light"
        endColor="slate.lighter"
      />
      <Skeleton
        width="200px"
        height="20px"
        startColor="slate.light"
        endColor="slate.lighter"
      />
      <Skeleton
        height="13px"
        startColor="slate.light"
        endColor="slate.lighter"
      />
      <Skeleton
        height="13px"
        startColor="slate.light"
        endColor="slate.lighter"
      />
      <HStack>
        <Skeleton
          startColor="slate.light"
          endColor="slate.lighter"
          height="13px"
          width="40px"
        />
        <Skeleton
          startColor="slate.light"
          endColor="slate.lighter"
          height="13px"
          width="40px"
        />
        <Skeleton
          startColor="slate.light"
          endColor="slate.lighter"
          height="13px"
          width="40px"
        />
      </HStack>
    </Stack>
  );
};

export default CardSkeleton;
