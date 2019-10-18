import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string()
                .email()
                .required(),
            idade: Yup.number().required(),
            peso: Yup.number().required(),
            altura: Yup.number().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails ' });
        }

        const { id, email, name, idade, peso, altura } = await Student.create(
            req.body
        );

        const userExists = await Student.findOne({
            where: { email },
        });

        if (userExists) {
            return res.status(400).json({ error: 'User already exists' });
        }

        return res.json({
            id,
            name,
            email,
            idade,
            altura,
            peso,
        });
    }
}

export default new StudentController();
