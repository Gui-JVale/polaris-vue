import {PDropZone} from './index';
import {PCard, PCardHeader, PCardSection} from '../PCard';

export default {
    title: 'Actions / Drop Zone',
    component: PDropZone,
    argTypes: {
        type: {
            options: ['file', 'image'],
            control: {
                type: 'select',
            },
        },
        // size: {
        //     options: ['extraLarge', 'large'],
        //     control: {
        //         type: 'select',
        //     },
        // },
        validImageTypes: {
            control: {
                type: 'array',
            },
            table: {
                type: {
                    summary: 'array',
                },
            },
        },
        uploadFiles: {
            table: {
                type: {
                    summary: 'slot',
                },
            },
        },
        files: {
            table: {
                type: {
                    summary: 'array',
                },
            },
        },
        handleOnDrop: {
            control: {
                type: 'none',
            },
            table: {
                type: {
                    summary: 'function',
                },
                defaultValue: {
                    summary: '()',
                    detail:`(files: File[], acceptedFiles: File[], rejectedFiles: File[]): void => {}`,
                },
            },
        },
        handleOnDropAccepted: {
            control: {
                type: 'none',
            },
            table: {
                type: {
                    summary: 'function',
                },
                defaultValue: {
                    summary: '()',
                    detail:`(acceptedFiles: File[]): void => {}`,
                },
            },
        },
        handleOnDropRejected: {
            control: {
                type: 'none',
            },
            table: {
                type: {
                    summary: 'function',
                },
                defaultValue: {
                    summary: '()',
                    detail:`(rejectedFiles: File[]): void => {}`,
                },
            },
        },
        handleOnFileDialogClose: {
            control: {
                type: 'none',
            },
            table: {
                type: {
                    summary: 'function',
                },
                defaultValue: {
                    summary: '()',
                    detail:`(): void => {}`,
                },
            },
        },
        handleOnDragOver: {
            control: {
                type: 'none',
            },
            table: {
                type: {
                    summary: 'function',
                },
                defaultValue: {
                    summary: '()',
                    detail:`(): void => {}`,
                },
            },
        },
        handleOnDragLeave: {
            control: {
                type: 'none',
            },
            table: {
                type: {
                    summary: 'function',
                },
                defaultValue: {
                    summary: '()',
                    detail:`(): void => {}`,
                },
            },
        },
        handleOnDragEnter: {
            control: {
                type: 'none',
            },
            table: {
                type: {
                    summary: 'function',
                },
                defaultValue: {
                    summary: '()',
                    detail:`(): void => {}`,
                },
            },
        },
    },
}

const Template = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {
        PDropZone
    },
    data() {
        return {
            images: [],
        };
    },
    template: `
        <PDropZone
            :handleOnDrop="handleDropZoneDrop"
            :files="images"
            v-bind="$props"
        />`,
    methods: {
        handleDropZoneDrop(files, acceptedFiles, rejectedFiles) {
            acceptedFiles.map((file) => {
                this.images.push(file);
            });
        },
    },
})

export const DropZone = Template.bind({});

DropZone.args = {
    validImageTypes: ['image/gif', 'image/jpeg', 'image/png'],
    type:"image"
}

const Template1 = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {
        PCard, PCardHeader, PCardSection, PDropZone
    },
    data() {
        return {
            images: [],
            openFilesDialog: false,
        };
    },
    template: `
        <PCard>
            <PCardHeader
                title="Product Images"
                :actions='[{
                    content: "Upload Image",
                    onAction: toggleOpenFileDialog,
                }]'
            />
            <PCardSection>
                <PDropZone
                        :files="images"
                        :openFileDialog="openFilesDialog"
                        :handleOnDrop="handleDropZoneDrop"
                        :handleOnFileDialogClose="toggleCloseFileDialog"
                        v-bind="$props"
                />
            </PCardSection>
        </PCard>`,
    methods: {
        toggleOpenFileDialog() {
            this.openFilesDialog = true;
        },
        toggleCloseFileDialog() {
            this.openFilesDialog = false;
        },
        handleDropZoneDrop(files, acceptedFiles, rejectedFiles) {
            acceptedFiles.map((file) => {
                this.images.push(file);
            });
        },
    }
})

export const DropZoneWithCustomFileDialogTrigger = Template1.bind({});

DropZoneWithCustomFileDialogTrigger.args = {
    validImageTypes: ['image/gif', 'image/jpeg', 'image/png'],
}
