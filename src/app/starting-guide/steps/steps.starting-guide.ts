export interface StepsStartingGuideModel {
  step?: string;
  message?: string;
  result?: ResultTypes;
  children?: StepsStartingGuideModel[];
}
export enum ResultTypes {
  MICROFRONTEND = 'microfrontend',
  LIBRARY = 'library',
  MONOREPO_APPLICATION = 'monorepo application',
}

export const STEPS_STARTING_GUIDE: StepsStartingGuideModel = {
  step: 'functionality',
  message:
    'Does the new project increment functionality to an existing application?',
  children: [
    {
      message: 'Yes',
      children: [
        {
          step: 'index',
          message:
            'Does the new project need its own deployment url to access over the internet?',
          children: [
            {
              message: 'Yes, will have its own url',
              children: [{ result: ResultTypes.MICROFRONTEND }],
            },
            {
              message: 'No, will be inside another',
              children: [{ result: ResultTypes.LIBRARY }],
            },
          ],
        },
      ],
    },
    {
      message: 'No',
      children: [
        {
          step: 'navigation',
          message: 'Has the new project a navigation to different views?',
          children: [
            {
              message: 'Yes',
              children: [
                {
                  step: 'independent',
                  message:
                    'Can the views be split into different applications or they all have the same context?',
                  children: [
                    {
                      message: 'Can be splitted',
                      children: [
                        {
                          step: 'teams',
                          message:
                            'How many development teams will participate in the project?',
                          children: [
                            {
                              message: 'One or two',
                              children: [
                                {
                                  step: 'Scalability',
                                  message:
                                    'The new project will have more than 15 routes?',
                                  children: [
                                    {
                                      message: 'Yes',
                                      children: [
                                        { result: ResultTypes.MICROFRONTEND },
                                      ],
                                    },
                                    {
                                      message: 'No',
                                      children: [
                                        {
                                          result:
                                            ResultTypes.MONOREPO_APPLICATION,
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              message: 'More than two',
                              children: [
                                {
                                  result: ResultTypes.MICROFRONTEND,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      message: 'Has same context',
                      children: [
                        {
                          step: 'big',
                          message:
                            'Do you think there are parts of the application that could be reused in other applications without modifying them?',
                          children: [
                            {
                              message: 'Yes',
                              children: [{ result: ResultTypes.MICROFRONTEND }],
                            },
                            {
                              message: 'No',
                              children: [
                                { result: ResultTypes.MONOREPO_APPLICATION },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              message: 'No',
              children: [
                {
                  step: 'navigation',
                  message:
                    'Is this proyect could be exported to be a part of a bigger aplication?',
                  children: [
                    {
                      message: 'Yes',
                      children: [{ result: ResultTypes.MICROFRONTEND }],
                    },
                    {
                      message: 'No',
                      children: [{ result: ResultTypes.MONOREPO_APPLICATION }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
