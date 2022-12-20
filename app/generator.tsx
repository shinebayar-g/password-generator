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
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const [passLength, setPassLength] = useState(16);
    const [quantity, setQuantity] = useState(1);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeLowerCase, setIncludeLowerCase] = useState(true);
    const [includeUpperCase, setIncludeUpperCase] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [symbols, setSymbols] = useState("{}!#$%&@/()[]\\*^-.+,_`~:;=?|");
    const [startWithLetter, setStartWithLetter] = useState(true);
    const [minNumbers, setMinNumbers] = useState(1);
    const [minSymbols, setMinSymbols] = useState(1);

    const generatePassword = () => {
        const passwords = [];
        const options = [];
        if (includeNumbers) {
            options.push(getRandomNumber);
        }
        if (includeLowerCase) {
            options.push(getRandomLower);
        }
        if (includeUpperCase) {
            options.push(getRandomUpper);
        }
        if (includeSymbols) {
            options.push(getRandomSymbol);
        }
        if (options.length <= 0) {
            setError('Invalid condition')
            return;
        } else {
            setError('')
        }

        for (let i = 1; i <= quantity; i++) {
            let finalPassword = '';

            if ((includeNumbers || includeSymbols) && startWithLetter) {
                const firstOptions = [...options]
                const includeNumberIndex = firstOptions.indexOf(getRandomNumber, 0);
                if (includeNumberIndex > -1) {
                    firstOptions.splice(includeNumberIndex, 1);
                }
                const includeSymbolIndex = firstOptions.indexOf(getRandomSymbol, 0);
                if (includeSymbolIndex > -1) {
                    firstOptions.splice(includeSymbolIndex, 1);
                }
                const randomFunc = firstOptions[Math.floor(Math.random() * firstOptions.length)];
                finalPassword += randomFunc(symbols);
            }

            for (let i = finalPassword.length; i < passLength; i++) {
                const randomFunc = options[Math.floor(Math.random() * options.length)];
                finalPassword += randomFunc(symbols);
            }
            passwords.push(finalPassword);
        }
        setValue(passwords.join('\n'));
    }

    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            padding='xs'
        >
            <Center>
                <Paper p={25}>
                    <Stack w='400px'>
                        <Title align='center' size={18}>Open-Source Strong Password Generator
                        </Title>
                        <Textarea
                            label="Your generated password:"
                            size="md"
                            value={value} onChange={(event) => setValue(event.currentTarget.value)}
                            error={error}
                            autosize
                            minRows={2}
                            maxRows={10}
                        />
                        <Button onClick={() => generatePassword()}>
                            Generate
                        </Button>
                        <CopyButton value={value}>
                            {({ copied, copy }) => (
                                <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
                                    {copied ? 'Copied password' : 'Copy'}
                                </Button>
                            )}
                        </CopyButton>
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
                            min={6}
                            max={64}
                        />
                        <Switch
                            label="Include numbers"
                            description="e.g. 1234"
                            size="md"
                            mt="sm"
                            checked={includeNumbers}
                            onChange={(event) => setIncludeNumbers(event.currentTarget.checked)}
                        />
                        <Switch
                            label="Include lowercase characters"
                            description="e.g. abcd"
                            size="md"
                            checked={includeLowerCase}
                            onChange={(event) => setIncludeLowerCase(event.currentTarget.checked)}
                        />
                        <Switch
                            label="Include uppercase characters"
                            description="e.g. ABCD"
                            size="md"
                            checked={includeUpperCase}
                            onChange={(event) => setIncludeUpperCase(event.currentTarget.checked)}
                        />
                        <Switch
                            label="Include symbols"
                            description="e.g. !#@%"
                            size="md"
                            checked={includeSymbols}
                            onChange={(event) => setIncludeSymbols(event.currentTarget.checked)}
                        />
                        <TextInput
                            defaultValue={symbols}
                            disabled={!includeSymbols}
                            onChange={(event) => setSymbols(event.currentTarget.value)}
                        />
                        <Switch
                            label="Don't begin with numbers or symbols"
                            size="md"
                            checked={startWithLetter}
                            disabled={!includeSymbols && !includeNumbers}
                            onChange={(event) => setStartWithLetter(event.currentTarget.checked)}
                        />
                        <NumberInput
                            value={minNumbers}
                            placeholder="1"
                            label="Minimum numbers"
                            disabled={!includeNumbers}
                            min={1}
                            max={passLength - minSymbols}
                            onChange={(val) => setMinNumbers(val!)}
                        />
                        <NumberInput
                            value={minSymbols}
                            placeholder="1"
                            label="Minimum symbols"
                            disabled={!includeSymbols}
                            min={1}
                            max={passLength - minNumbers}
                            onChange={(val) => setMinSymbols(val!)}
                        />
                        <NumberInput
                            placeholder="1"
                            label="Quantity"
                            value={quantity}
                            min={1}
                            onChange={(val) => setQuantity(val!)}
                        />
                    </Stack>
                </Paper>
            </Center>
        </AppShell >
    );
}

const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

const getRandomSymbol = (symbols: string) => {
    return symbols[Math.floor(Math.random() * symbols.length)];
}
