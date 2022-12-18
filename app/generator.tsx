'use client';

import { useState } from 'react';
import {
    AppShell,
    useMantineTheme,
    Text, Textarea,
    Switch,
    Center,
    NumberInput, TextInput,
    Slider,
    Paper,
    Button, CopyButton,
    Stack,
    Title,
} from '@mantine/core';

export function Generator() {
    const theme = useMantineTheme();
    const [passLength, setPassLength] = useState(16);

    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
        >
            <Center>
                <Paper p={25}>
                    <Stack w='400px'>
                        <Title align='center' size={18}>Free, Open-Source Strong Password Generator
                        </Title>
                        <Text mt="sm" size="sm">
                            Password length: <b>{passLength}</b>
                        </Text>

                        <Slider
                            marks={[
                                { value: 8, label: '8' },
                                { value: 16, label: '16' },
                                { value: 32, label: '32' },
                                { value: 64, label: '64' },
                            ]}
                            value={passLength} onChange={setPassLength}
                            min={1}
                            max={64}
                        />

                        <Switch
                            label="Include numbers"
                            description="e.g. 1234"
                            size="md"
                        />
                        <Switch
                            label="Include lowercase characters"
                            description="e.g. abcd"
                            size="md"
                        />
                        <Switch
                            label="Include uppercase characters"
                            description="e.g. ABCD"
                            size="md"
                        />
                        <Switch
                            label="Don't begin with numbers or symbols"
                            size="md"
                        />
                        <TextInput
                            label="Include special characters"
                            description="e.g. !#@%"
                            defaultValue="{}!#$%&@/()[]\*^-.+,_`~:;=?|"
                        />
                        <NumberInput
                            defaultValue={1}
                            placeholder="1"
                            label="Minimum numbers"
                        />
                        <NumberInput
                            defaultValue={1}
                            placeholder="1"
                            label="Minimum special characters"
                        />
                        <NumberInput
                            defaultValue={1}
                            placeholder="1"
                            label="Quantity"
                        />
                        <Button>
                            Generate
                        </Button>
                        <CopyButton value="https://mantine.dev">
                            {({ copied, copy }) => (
                                <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
                                    {copied ? 'Copied password' : 'Copy'}
                                </Button>
                            )}
                        </CopyButton>
                        <Textarea
                            label="Your generated password:"
                            size="md"
                        />
                    </Stack>
                </Paper>
            </Center>
        </AppShell >
    );
}
