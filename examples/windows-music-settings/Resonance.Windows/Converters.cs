using Microsoft.UI;
using Microsoft.UI.Xaml.Data;
using Microsoft.UI.Xaml.Media;
using Windows.UI;

namespace Resonance;

public sealed class SecondsToTimeConverter : IValueConverter
{
    public object Convert(object value, Type targetType, object parameter, string language)
    {
        var s = value is double d ? d : (value is int i ? i : 0);
        var ts = TimeSpan.FromSeconds(Math.Max(0, s));
        return ts.TotalHours >= 1 ? ts.ToString(@"h\:mm\:ss") : ts.ToString(@"m\:ss");
    }
    public object ConvertBack(object value, Type t, object p, string l) => throw new NotImplementedException();
}

public sealed class HexToBrushConverter : IValueConverter
{
    public object Convert(object value, Type targetType, object parameter, string language)
    {
        if (value is string hex && !string.IsNullOrEmpty(hex))
        {
            var h = hex.TrimStart('#');
            if (h.Length == 6)
            {
                var r = byte.Parse(h.Substring(0, 2), System.Globalization.NumberStyles.HexNumber);
                var g = byte.Parse(h.Substring(2, 2), System.Globalization.NumberStyles.HexNumber);
                var b = byte.Parse(h.Substring(4, 2), System.Globalization.NumberStyles.HexNumber);
                return new SolidColorBrush(Color.FromArgb(255, r, g, b));
            }
        }
        return new SolidColorBrush(Colors.Transparent);
    }
    public object ConvertBack(object value, Type t, object p, string l) => throw new NotImplementedException();
}

public sealed class HexToColorConverter : IValueConverter
{
    public object Convert(object value, Type targetType, object parameter, string language)
    {
        if (value is string hex && !string.IsNullOrEmpty(hex))
        {
            var h = hex.TrimStart('#');
            if (h.Length == 6)
            {
                var r = byte.Parse(h.Substring(0, 2), System.Globalization.NumberStyles.HexNumber);
                var g = byte.Parse(h.Substring(2, 2), System.Globalization.NumberStyles.HexNumber);
                var b = byte.Parse(h.Substring(4, 2), System.Globalization.NumberStyles.HexNumber);
                return Color.FromArgb(255, r, g, b);
            }
        }
        return Colors.Transparent;
    }
    public object ConvertBack(object value, Type t, object p, string l) => throw new NotImplementedException();
}

public sealed class PlayPauseGlyphConverter : IValueConverter
{
    public object Convert(object value, Type targetType, object parameter, string language)
        => (value is bool playing && playing) ? "" : ""; // Pause / Play
    public object ConvertBack(object value, Type t, object p, string l) => throw new NotImplementedException();
}

public sealed class ProgressFractionConverter : IValueConverter
{
    public object Convert(object value, Type targetType, object parameter, string language)
    {
        if (value is double pos && parameter is string maxStr && double.TryParse(maxStr, out var max) && max > 0)
            return Math.Clamp(pos / max, 0, 1);
        return 0d;
    }
    public object ConvertBack(object value, Type t, object p, string l) => throw new NotImplementedException();
}
