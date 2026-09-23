import 'dotenv/config';
import postgres from 'postgres';

console.log('Host:', new URL(process.env.POSTGRES_URL).hostname);

const sql = postgres(process.env.POSTGRES_URL_NON_POOLING, {
    ssl: 'require',
    connect_timeout: 10,
});

try {
    console.log('Connecting...');

    const result = await sql`SELECT NOW()`;

    console.log('SUCCESS:', result);
} catch (error) {
    console.error('FAILED');
    console.error(error);
} finally {
    await sql.end();
}