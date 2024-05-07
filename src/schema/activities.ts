import { z } from "zod";

export const activitieSchema = z.object({
  dateStart: z
    .string({
      required_error: "Please select a date and time",
      invalid_type_error: "That's not a date!",
    })
    .date(),
  dateEnd: z
    .string({
      required_error: "Date end is required!",
    })
    .date(),
  timeStart: z
    .string({
      required_error: "Time start is required!",
    })
    .time(),
  timeEnd: z
    .string({
      required_error: "Time end is required!",
    })
    .time(),
  activitieName: z
    .string({
      message: "Activitie name is Required",
    })
    .min(5, { message: "Must be 5 or more characters long" }),
  projectName: z
    .string({
      message: "Project name is Required!",
    })
    .min(1, { message: "Project name is Required!" }),
});
