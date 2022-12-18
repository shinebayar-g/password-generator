'use client';

import { useState } from 'react';
import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
    Textarea,
    Switch,
    Center,
    NumberInput,
    TextInput,
    Slider,
} from '@mantine/core';

export function Generator() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const [passLength, setPassLength] = useState(16);
    const [rangePassLength, setRangePassLength] = useState<[number, number]>([1, 64]);

    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            aside={
                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                    <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                        <Text>Generated password history</Text>
                        <Text>Cleared on refresh, not saving anywhere for privacy purposes.</Text>
                    </Aside>
                </MediaQuery>
            }
            footer={
                <Footer height={60} p="md">
                    Application footer
                </Footer>
            }
            header={
                <Header height={{ base: 50, md: 70 }} p="md">
                    <div style={{ display: 'grid', alignItems: 'center', height: '100%' }}>
                        <Text align='center'>Free, Open-Source Strong Password Generator</Text>
                    </div>
                </Header>
            }
        >
            <Text>Generate your password</Text>

            <Text mt="md" size="sm">
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
            <Textarea
                label="Your generated password:"
                size="md"
            />

        </AppShell>
    );
}
