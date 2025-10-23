'use server';

/**
 * @fileOverview Generates a creative tagline for the animated hero section based on user-provided information.
 *
 * - generateAnimatedHeroTagline - A function that generates the tagline.
 * - GenerateAnimatedHeroTaglineInput - The input type for the generateAnimatedHeroTagline function.
 * - GenerateAnimatedHeroTaglineOutput - The return type for the generateAnimatedHeroTagline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAnimatedHeroTaglineInputSchema = z.object({
  userName: z.string().describe('The name of the user.'),
  userSkills: z.array(z.string()).describe('A list of the user\'s skills.'),
  userExperience: z.string().describe('A summary of the user\'s experience.'),
  futureVision: z.string().describe('The user\'s vision for the future.'),
});
export type GenerateAnimatedHeroTaglineInput = z.infer<
  typeof GenerateAnimatedHeroTaglineInputSchema
>;

const GenerateAnimatedHeroTaglineOutputSchema = z.object({
  tagline: z.string().describe('A creative and engaging tagline for the hero section.'),
});
export type GenerateAnimatedHeroTaglineOutput = z.infer<
  typeof GenerateAnimatedHeroTaglineOutputSchema
>;

export async function generateAnimatedHeroTagline(
  input: GenerateAnimatedHeroTaglineInput
): Promise<GenerateAnimatedHeroTaglineOutput> {
  return generateAnimatedHeroTaglineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAnimatedHeroTaglinePrompt',
  input: {schema: GenerateAnimatedHeroTaglineInputSchema},
  output: {schema: GenerateAnimatedHeroTaglineOutputSchema},
  prompt: `You are a creative copywriter specializing in generating engaging taglines for personal websites.

  Based on the following information about the user, generate a short, creative, and impactful tagline for their animated hero section.

  User Name: {{{userName}}}
  Skills: {{#if userSkills}}{{#each userSkills}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}{{else}}No skills listed{{/if}}
  Experience: {{{userExperience}}}
  Future Vision: {{{futureVision}}}

  Tagline:`, // No function calls, no asynchronous operations.
});

const generateAnimatedHeroTaglineFlow = ai.defineFlow(
  {
    name: 'generateAnimatedHeroTaglineFlow',
    inputSchema: GenerateAnimatedHeroTaglineInputSchema,
    outputSchema: GenerateAnimatedHeroTaglineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
