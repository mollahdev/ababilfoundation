'use client';

import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

export default function Admin() {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Admin</h1>
            <Drawer opened={opened} onClose={close} title="Authentication">
                {/* Drawer content */}
            </Drawer>

            <Button variant="default" onClick={open}>
                Open Drawer
            </Button>
        </div>
    );
}