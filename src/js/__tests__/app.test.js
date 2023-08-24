import Settings from '../settings';

describe('Settings', () => {
    let settings;

    beforeEach(() => {
        settings = new Settings();
    });

    test('should return default settings when no user settings are set', () => {
        expect(settings.settings.get('theme')).toBe('dark');
        expect(settings.settings.get('music')).toBe('trance');
        expect(settings.settings.get('difficulty')).toBe('easy');
    });

    test('should merge default and user settings', () => {
        settings.setUserSetting('theme', 'light');
        settings.setUserSetting('music', 'pop');
        settings.setUserSetting('difficulty', 'normal');
        expect(settings.settings.get('theme')).toBe('light');
        expect(settings.settings.get('music')).toBe('pop');
        expect(settings.settings.get('difficulty')).toBe('normal');
    });
});