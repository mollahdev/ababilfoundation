import React from 'react';
import Test from '@/components/test';
import { Button, Text, Stack } from '@mantine/core';
import Link from 'next/link';


export default function ComingSoon() {
  return (
    <div>
      <Test />
      <h1>Ababil Foundation</h1>
      <Stack>
        <Text size="xl">Admin Panel</Text>
        <Button variant="filled">Click me</Button>
        <Link href="/admin">Admin Panel</Link>
      </Stack>
    </div>
  );
}
